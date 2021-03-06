import React from 'react'
import { Link, withPrefix } from 'gatsby'
import Layout from '../components/layout'

import logoWeWork from '../images/sponsors/logo-wework.svg'
import logoTwilio from '../images/sponsors/logo-twilio.svg'
import logoTrackjs from '../images/sponsors/logo-trackjs.svg'
import logoFrontendMasters from '../images/sponsors/logo-frontend-masters.svg'
import logoChRobinson from '../images/sponsors/logo-ch-robinson.svg'

const OurSponsors = () => (
  <Layout>
    <div className="interior-page sponsors-page tilt-left">
      <h1 className="secondary-content-header">Current Sponsors</h1>

      <div className="sponsor-tier platinum">
        <span className="tier-title">Host</span>

        <div className="sponsor-container-row">
          <a
            className="sponsor"
            href="https://www.wework.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoWeWork} alt="Host: WeWork" title="Host: WeWork" />
          </a>
        </div>
      </div>

      <div className="sponsor-tier platinum">
        <span className="tier-title">Platinum</span>

        <div className="sponsor-container-row">
          <a
            className="sponsor"
            href="https://twilio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoTwilio}
              alt="Platinum Sponsor: Twilio"
              title="Platinum Sponsor: Twilio"
            />
          </a>
          <a
            className="sponsor"
            href="https://trackjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoTrackjs}
              alt="Platinum Sponsor: TrackJS"
              title="Platinum Sponsor: TrackJS"
            />
          </a>
          <a
            className="sponsor"
            href="https://frontendmasters.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoFrontendMasters}
              alt="Platinum Sponsor: Frontend Masters"
              title="Platinum Sponsor: Frontend Masters"
            />
          </a>
          <a
            className="sponsor"
            href="https://www.chrobinson.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoChRobinson}
              alt="Gold Sponsor: C.H. Robinson"
              title="Gold Sponsor: C.H. Robinson"
            />
          </a>
        </div>
      </div>

      <div className="sponsor-tier gold">
        <span className="tier-title">Gold</span>

        <div className="sponsor-container-row sponsor-tier-2">
          <Link
            className="sponsor empty-sponsor"
            to={withPrefix('/sponsorship-opportunities')}
          >
            Become a Sponsor!
          </Link>
        </div>
      </div>

      <div className="sponsor-tier silver">
        <span className="tier-title">Silver</span>

        <div className="sponsor-container-row sponsor-tier-3">
          <Link
            className="sponsor empty-sponsor"
            to={withPrefix('/sponsorship-opportunities')}
          >
            Become a Sponsor!
          </Link>
          <Link
            className="sponsor empty-sponsor"
            to={withPrefix('/sponsorship-opportunities')}
          >
            Become a Sponsor!
          </Link>
          <Link
            className="sponsor empty-sponsor"
            to={withPrefix('/sponsorship-opportunities')}
          >
            Become a Sponsor!
          </Link>
          <Link
            className="sponsor empty-sponsor"
            to={withPrefix('/sponsorship-opportunities')}
          >
            Become a Sponsor!
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default OurSponsors
