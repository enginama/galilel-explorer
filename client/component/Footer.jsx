
import Component from '../core/Component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import Icon from './Icon';

/**
 * Will use material icons to render.
 * @param {Object} props The props with the name.
 */
class Footer extends Component {
  static propTypes = {
    coins: PropTypes.array.isRequired,
    txs: PropTypes.array.isRequired,
  };

  render() {
    const coin = this.props.coins && this.props.coins.length ? this.props.coins[0] : { status: 'offline', blocks: 0 };
    const blocks = this.props.txs && this.props.txs.length ? this.props.txs[0].blockHeight : coin.blocks;
    const statusColor = (coin.status && coin.status.toLowerCase() === 'online') ? 'green' : 'red';

    return (
      <div className="footer">
        <div className="footer__block">
          <div className="footer__data-wrapper">
            <div className="footer__data-block">
              <p className="footer__data-title">Status</p>
              <p>
                <span className={`u__dot u--text-${statusColor}`}>&nbsp;</span>
                <span>{coin.status}</span>
              </p>
            </div>
            <div className="footer__data-block">
              <p className="footer__data-title">Blocks</p>
              <p><b>{blocks}</b></p>
            </div>
            <div className="footer__data-block">
              <p className="footer__data-title">Time</p>
              <p>{`${moment().utc().format('HH:mm')} UTC`}</p>
            </div>
          </div>
        </div>
        <div className="footer__block">
          <div className="footer__social-media-wrapper">
            <div className="footer__social-title">Social Media</div>
            <div>
              <a href={config.socialMedia.discord} target="_blank">
                <Icon name="discord" className="fab footer__social-media-icon" />
              </a>
              <a href={config.socialMedia.telegram} target="_blank">
                <Icon name="telegram" className="fab footer__social-media-icon" />
              </a>
              <a href={config.socialMedia.twitter} target="_blank">
                <Icon name="twitter" className="fab footer__social-media-icon" />
              </a>
              <a href={config.socialMedia.bitcoinTalk} target="_blank">
                <Icon name="bitcoin" className="fab footer__social-media-icon" />
              </a>
              <a href={config.socialMedia.facebook} target="_blank">
                <Icon name="facebook" className="fab footer__social-media-icon" />
              </a>
              <a href={config.socialMedia.youtube} target="_blank">
                <Icon name="youtube" className="fab footer__social-media-icon" />
              </a>
              <a href={config.socialMedia.github} target="_blank">
                <Icon name="github" className="fab footer__social-media-icon" />
              </a>
              <a href={config.socialMedia.instagram} target="_blank">
                <Icon name="instagram" className="fab footer__social-media-icon" />
              </a>
              <a href={config.socialMedia.reddit} target="_blank">
                <Icon name="reddit" className="fab footer__social-media-icon" />
              </a>
              <a href={config.socialMedia.medium} target="_blank">
                <Icon name="medium" className="fab footer__social-media-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

const mapState = state => ({
  coins: state.coins,
  txs: state.txs,
});

export default connect(mapState)(Footer);
