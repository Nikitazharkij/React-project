import React from 'react';
import style from './Tv.module.sass'

const Tv = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-12 ${style.textInfo}`}>
          <p>Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Ut enim ad minim veniam, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, ut et voluptates repudiandae sint et molestiae non recusandae! Temporibus autem.</p>
        </div>
      </div>
    </div>
  )
}

export default Tv;