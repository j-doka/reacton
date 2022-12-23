import Image from "next/image";
import { Component } from "react";
import Lightning from "../public/icons8-lightning-bolt-96.png";
import Refresh from "../public/icons8-refresh-480.png";
import {
  test_container,
  reac_container,
  test_bar,
  bar_item,
  reset_button,
  readyState,
  goState,
  blueState,
  chart,
  test_chart_container,
  test_chart_wrapper,
} from "./reactionbox.module.css";
import { Line } from "react-chartjs-2";
import { v4 as uuidv4 } from "uuid";

class Reactionbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prev: [],
      previ: false,
      timerOn: false,
      timerStart: 0,
      timerEnd: 0,
      timerDelt: 0,
      auto: false,
      ready: false,
      go: false,
      disabled: false,
      reacted: false,
      trys: [],
      tries: 0,
      isloading: false,
      error: false,
      users: null,
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  async update({ id, username, timerDelt }) {
    this.setState({ isLoading: true });
    let updates = {
      id,
      username,
      timerDelt,
      updated_at: new Date(),
    };

    try {
      const { error, data } = await supabase
        .from("profiles")
        .insert([updates], {
          returning: "minimal",
        });
      if (error) {
        throw error;
      }
      this.setState({
        users: data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error,
        isLoading: false,
      });
    }
  }

  readyState = () => {
    this.setState({
      ready: true,
      disabled: true,
    });
    setTimeout(() => {
      this.setState({
        go: true,
        ready: false,
        timerStart: Date.now(),
        disabled: false,
      });
    }, Math.random() * 10000);
  };

  stopTimer = () => {
    this.setState({
      timerOn: false,
      timerEnd: Date.now(),
      reacted: true,
    });
  };

  resetTimer = () => {
    this.setState({
      auto: false,
      ready: false,
      go: false,
      reacted: false,
      previ: this.state.prev[this.state.prev.length - 1],
      disabled: false,
      tries: this.state.tries + 1,
    });

    this.state.trys.push(this.state.tries);
  };

  render() {
    let { disabled } = this.state;
    let { prev } = this.state;
    let { previ } = this.state;
    let { timerStart } = this.state;
    let { timerEnd } = this.state;
    let { ready } = this.state;
    let { reacted } = this.state;
    let { go } = this.state; // responislbe for setting image to green
    let { auto } = this.state;
    let { tries } = this.state;
    let { trys } = this.state;
    let { timerDelt } = this.state;
    let { width } = this.state;
    let goTime = null;
    // const { session } = this.props;

    if (go === true) {
      goTime = "ready";
    }

    if (reacted) {
      disabled = true;
      timerDelt = timerEnd - timerStart;
      prev.push(timerDelt);
    }

    // This is gets rid of most anonmylous results, but it creates duplicates, I am not sure why tho.

    const state = {
      labels: trys, // tries
      datasets: [
        {
          label: "Reaction",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(78, 172, 207, 100)",
          borderWidth: 2,
          data: [...new Set(this.state.prev)],
        },
      ],
    };

    return (
      <div>
        <div className={test_container}>
          <button
            disabled={disabled}
            id={goTime}
            className={
              reacted === true
                ? blueState
                : go === true
                ? goState
                : ready === true
                ? readyState
                : reac_container
            }
            onClick={go === true ? this.stopTimer : this.readyState}
          >
            {reacted || go || auto || ready == true ? (
              ""
            ) : (
              <Image src={Lightning} alt="Lightning Symbol" />
            )}
          </button>
          <div className={test_bar}>
            <div className={bar_item}>{previ ? previ + "ms" : "-"}</div>
            <div className={bar_item}>
              <div>{reacted === true ? timerDelt + "ms" : "-"}</div>
            </div>
            <button className={reset_button} onClick={this.resetTimer}>
              <Image
                width={30}
                height={30}
                src={Refresh}
                alt="Refresh Symbol"
              />
            </button>
          </div>

          {console.log(
            ready,
            go,
            goTime,
            auto,
            reacted,
            timerStart,
            timerEnd,
            timerDelt,
            [...new Set(this.state.prev)],
            previ,
            trys,
            tries
          )}
        </div>
        <div className={test_chart_container}>
          <div className={test_chart_wrapper}>
            <div className={chart}>
              <Line
                data={state}
                options={{
                  title: {
                    display: true,
                    text: "Average Reaction Time",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reactionbox;

// /* chartJS */
