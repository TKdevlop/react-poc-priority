import React from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3
  }
});

class MultipleSelect extends React.Component {
  state = {
    colors: ["black", "blue", "cyan"],
    currentPriority: { name: "", color: "" },
    open: false,
    currentColor: "red",
    currentText: "",
    names: [
      {
        name: "high",
        color: "red"
      },
      {
        name: "low",
        color: "green"
      },
      {
        name: "medium",
        color: "orangered"
      }
    ]
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {}

  changePriority = name => {
    this.setState({ currentPriority: name });
  };
  handleChange = event => {
    if (!event.target.value) {
      return;
    }
    let currentPriority = this.state.names.find(
      name => name.name === event.target.value
    );

    this.setState({ currentPriority });
  };
  changeColor = color => {
    this.setState({ currentColor: color });
  };
  handleInput = e => {
    this.setState({ currentText: e.target.value });
  };
  addPriority = () => {
    this.setState(prevState => {
      return {
        names: [
          ...prevState.names,
          { name: this.state.currentText, color: this.state.currentColor }
        ]
      };
    });
    this.handleClose();
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Priority</InputLabel>
          <Select
            value={this.state.currentPriority.name}
            style={{ background: this.state.currentPriority.color }}
            onChange={this.handleChange}
            inputProps={{
              name: "age",
              id: "age-simple"
            }}
          >
            {this.state.names.map(name => (
              <MenuItem
                key={name.name}
                style={{ backgroundColor: name.color }}
                value={name.name}
              >
                {name.name}
              </MenuItem>
            ))}
            <MenuItem>
              <br />
              <Button
                onClick={this.handleClickOpen}
                color="primary"
                className={classes.button}
              >
                add/edit label
              </Button>
            </MenuItem>
          </Select>
        </FormControl>
        <Dialog
          style={{ padding: 30 }}
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>ADD PRIORITY</DialogTitle>
          <DialogContent>
            <TextField
              style={{
                borderLeft: "3px",
                borderRadius: "2px",
                borderColor: "red"
              }}
              id="standard-name"
              label="PRIORITY NAME"
              className={classes.textField}
              value={this.state.currentText}
              onChange={this.handleInput}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ background: this.state.currentColor, padding: 10 }}
                  />
                )
              }}
            />
            <br />
            <br />
            {this.state.colors.map(color => (
              <span
                onClick={() => this.changeColor(color)}
                style={{
                  margin: "0 2px",
                  width: 20,
                  height: 20,
                  cursor: "pointer",
                  display: "inline-block",
                  borderRadius: "50%",
                  background: color
                }}
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addPriority} color="primary">
              ADD
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MultipleSelect);
