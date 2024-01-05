import cx from "classnames";
import { Component } from "react";

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 100,
      liked: false,
    };
  }

  handleClick = () => {
    this.setState((prev) => ({
      count: prev.liked ? prev.count - 1 : prev.count + 1,
      liked: !prev.liked,
    }));
  };

  render() {
    const { count, liked } = this.state;
    return (
      <>
        <div>
          <h2>Like Button</h2>
          <button
            className={cx(`like-button ${liked && "liked"}`)}
            onClick={this.handleClick}
          >
            Like | <span className={cx("likes-counter")}>{count}</span>
          </button>
        </div>
        <style>
          {`
            .like-button {
                font-size: 1rem;
                padding: 5px 10px;
                color:  #585858;
            }
            .liked {
                font-weight: bold;
                color: #1565c0;
            }
          `}
        </style>
      </>
    );
  }
}
