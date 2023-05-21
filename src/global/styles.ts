import {relativeWidth} from "../initializer/helper/ViewHelper";

export const colors = {
  buttons: '#ff8c52',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  cardComment: '#86939e',
  cardBackground: '#ffffff',
  statusbar: '#ff8c52',
  headerText: '#ffffff',
  lightgreen: '#66DF48'
};

export const parameters = {
  headerHeight: relativeWidth(90),
  styledButton: {
    backgroundColor: "#ff8c52",
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 52,
    paddingHorizontal: 20,
    width: '100%'
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3
  },
  createButton: {
    backgroundColor: '#ffffff',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20
  },
  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -3
  }
};

export const titleText = {
  color: '#ff8c52',
  fontSize: 20,
  fontWeight: 'bold'
};
