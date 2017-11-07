import React from 'react';
import './Home.css';
/* Logos */
import jareckiValvesLogo from '../../../../assets/jarecki-valves-logo.png';
import maxAirTechnologyLogo from '../../../../assets/max-air-logo-black.png';
import wintersInstrumentsLogo from '../../../../assets/winters-instruments-logo.png';
import wintersInstrumentsAward from '../../../../assets/canandas-best-logo.png';
import showCase from '../../../../assets/products1.jpg';

export default function Home(props){
  return (
    <section id='home'>
      <div className='logo-placeholder'>AMS</div>
      <h1 className='home-title'>Air Management Specialists</h1>
      <h2 className='home-subtitle'>Air Pollution Control / Process Control</h2>

      <img className='show-case' src={showCase} alt='Product show case'/>

      <hr/>

      <p>Specializing in the sale, service &amp; design of industrial ventilation systems and; in the sale, service and
      design of industrial process systems, AMS serves its customers with critical aspects of their business.
      Whether ensuring safer &amp; more environmental friendly working conditions for your employees or,
      improving the efficiency and/or productivity of your industrial process, AMS provides products and
      services that add value to your business. We simply make things better for our customers!
      Located in St. George, Utah, AMS serves Utah, Northern Arizona &amp; Southern Nevada. We proudly
      represent the following manufactures:</p>

      {/*<div className='.temp'>LOGOS (Diversitech Air Pollution Solutions,
        Royal Filters, Quality Sourced Manufacturing, Jarecki Valves,
        Quaddax Valves, Max-Air Technology, Winter’s Instruments)</div>*/}

      <div className='logo-box'>
        <img className='jarecki-valves-logo' src={jareckiValvesLogo} alt='Jarecki Valves logo'/>
        <img className='max-air-technology-logo' src={maxAirTechnologyLogo} alt='Max Air Technology logo'/>
        <div className='winters-container'>
          <img className='winters-instruments-logo' src={wintersInstrumentsLogo} alt="Winter's Instruments logo"/>
          <img className='winters-instruments-award' src={wintersInstrumentsAward} alt="Canada's Best Mangaged Companies"/>
        </div>
      </div>

      <hr/>

      <p>Industrial ventilation issues from the design to the implementation of collection equipment built to
      handle hazardous and/or explosive dust, weld fume, smoke, mist, etc. is our specialty. We also focus in
      the management and control of light to severe service industrial processes from steam, water, slurries,
      sour gas, cryogenic applications, etc. Anything that runs through a pipe and requires manipulation…high
      pressure, low pressure, hot or cold… WE DO THAT!</p>

      <p>We appreciate and value the long-standing relationships we have with our customers. We recognize and
      understand the time and effort they put forth to meet their obligations to their clients and it is our
      objective to help them do that any way we can! We hope you give us the opportunity to help you as
      well!</p>
    </section>
  );
}
