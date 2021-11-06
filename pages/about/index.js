import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import Layout from '../../components/layout.jsx'

let callout = {
    textAlign: 'center',
    maxWidth: '30rem',
    padding: '1.5rem',
    borderRadius: '4px',
    backgroundColor: '#2a2a2a',

}

let container = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    transition: 'all 0.2s ease 0s',
}
export default function About() {

    return (
        <Layout PageTitle="Reacton">
            <div style={container}>
                <div style={callout}>
                    <p>
                    </p>
                </div>
            </div>
            
        </Layout>
    )
}