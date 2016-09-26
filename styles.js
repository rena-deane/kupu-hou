import React from 'react-native'
import { StyleSheet } from 'react-native'

const constants = {
  actionColor: '#6AC8AD',
  colorWhite: '#fff',
  colorSand: '#F9FAF4'
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: constants.colorWhite,
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: constants.colorWhite,
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  componentbar: {
    backgroundColor: constants.actionColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  componenttitle: {
    color: constants.colorWhite
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: constants.actionColor,
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.colorSand,
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
})

module.exports = styles
module.exports.constants = constants;
