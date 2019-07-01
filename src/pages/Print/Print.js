import React from 'react';
import style from './Print.module.sass'

const Print = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-12 ${style.textInfo}`}>
          <p>Sed ut perspiciatis, quis nostrum exercitationem ullam corporis suscipit laboriosam, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo! Ut enim ad minim veniam, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus! Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur! At vero eos et accusamus et iusto odio dignissimos ducimus, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.</p>
        </div>
      </div>
    </div>
  )
}

export default Print;