import React, { Component } from 'react';
import s from './MainCityClock.module.sass'

class MainCityClock extends Component {

  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className={`col-12 ${s.textInfo}`}>
              <p>Nemo enim ipsam voluptatem, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, nisi ut aliquid ex ea commodi consequatur. Ut enim ad minim veniam, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem eum fugiat, quo voluptas nulla pariatur. Ut enim ad minima veniam, unde omnis iste natus error.</p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default MainCityClock;