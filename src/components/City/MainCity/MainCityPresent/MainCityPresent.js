import React, { Component } from 'react';
import s from './MainCityPresent.module.sass'

class MainCityPresent extends Component {

  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className={`col-12 ${s.textInfo}`}>
              <p>Excepteur sint occaecat cupidatat non proident, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur. Quis autem vel eum iure reprehenderit, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, ut et voluptates repudiandae sint et molestiae non recusandae! Quis autem vel eum iure reprehenderit, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, qui dolorem eum fugiat, quo voluptas nulla pariatur. Excepteur sint occaecat cupidatat non proident, quis nostrum exercitationem ullam corporis suscipit laboriosam, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default MainCityPresent;