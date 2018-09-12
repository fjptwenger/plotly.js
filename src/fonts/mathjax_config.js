/**
* Copyright 2012-2018, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

/* global MathJax:false */

/**
 * Check and configure MathJax
 */
if(typeof MathJax !== 'undefined') {
    exports.MathJax = true;

    MathJax.Hub.Config({
        messageStyle: 'none',
        displayAlign: 'left',
        tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']]
        },
        SVG: {font: 'STIX-Web'},
    });

    MathJax.Hub.Configured();
} else {
    exports.MathJax = false;
}
