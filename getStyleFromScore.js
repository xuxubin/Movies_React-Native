'use strict';

// return the text style according to the score
var React = require('react-native');

var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  noScore: {
    color: '#999999',
  },
});

var MAX_VALUE = 200;

//引入新数据类型，在node_modules/react-native/Libraries里面
import type { StyleObj } from 'StyleSheetTypes';

function getStyleFromScore(score: number): StyleObj {
	if(score < 0) {
		return styles.noScore;
	}

	var normalizedScore = Math.round((score / 100) * MAX_VALUE);
	// return color in rgb form
	return {
		color: 'rgb(' + (MAX_VALUE - normalizedScore) + ', ' +
			normalizedScore + ',' + 0 + ')'
	};
}

module.exports = getStyleFromScore;
