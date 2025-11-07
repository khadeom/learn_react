import React, { useContext } from 'react';
import { Context } from '../day5/Context';

export default function AboutUs() {
  // const { commonData } = useContext(Context) 

  return (
    <div className="container py-5">
      {/* <h2>Common Data {commonData}</h2> */}
      <div className="bg-light p-4 rounded-3 shadow-sm mb-4">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="display-6">About Us</h1>
            <p className="lead text-muted">We build simple, reliable web apps that help small teams do their best work.</p>
          </div>
          <div className="col-md-4 text-md-end">
            <img src="/logo192.png" alt="logo" style={{width:96,height:96}} className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Our mission</h5>
              <p className="card-text">Create delightful user experiences by focusing on clarity, performance, and continuous improvement.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Our vision</h5>
              <p className="card-text">A world where software simplifies work instead of complicating it.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">What we value</h5>
              <ul className="mb-0">
                <li>Simplicity</li>
                <li>Collaboration</li>
                <li>Quality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <h3 className="h5">Meet the team</h3>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <div className="text-center" style={{width:140}}>
              <div className="rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{width:88,height:88,color:'#fff'}}>AO</div>
              <div className="mt-2">A. Omkhade<br/><small className="text-muted">Founder</small></div>
            </div>

            <div className="text-center" style={{width:140}}>
              <div className="rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{width:88,height:88,color:'#fff'}}>JS</div>
              <div className="mt-2">J. Smith<br/><small className="text-muted">Engineer</small></div>
            </div>

            <div className="text-center" style={{width:140}}>
              <div className="rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center" style={{width:88,height:88,color:'#fff'}}>ML</div>
              <div className="mt-2">M. Lee<br/><small className="text-muted">Designer</small></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h3 className="h5">Get in touch</h3>
          <p className="text-muted">If you'd like to work with us or give feedback, email <a href="mailto:hello@example.com">hello@example.com</a> or use our contact form.</p>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Quick facts</h6>
              <p className="mb-1"><strong>Founded:</strong> 2023</p>
              <p className="mb-0"><strong>Focus:</strong> Web apps & UX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 