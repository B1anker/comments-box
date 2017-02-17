/**
 * Created by b1anker on 2017/02/17.
 */

var React = require('react');
var ProductBox;
ProductBox = React.createClass({
    render: function () {
        return (
            <div className="productBox">
                hello react&es2015&webpack!
								<button className="btn btn-success">test</button>
            </div>
        );
    }
});

module.exports = ProductBox;
