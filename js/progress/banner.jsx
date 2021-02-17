import React from "react";

export default class ProgressBanner extends React.Component {
  percentDone = () => {
    return this.props.repoState.linesPercent;
  };

  completionDate = () => {
    return "TODO";
  };

  asmPercent = () => {
    return (this.props.repoState.linesDone / this.props.repoState.lines) * 100;
  };

  funcPercent = () => {
    return (this.props.repoState.funcsDone / this.props.repoState.funcs) * 100;
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Card variant="elevation" elevation={0}>
            <CardContent>
              <Typography variant="h4">
                Battle for Bikini Bottom is {this.percentDone()}% decompiled
              </Typography>
              {/* 
              <Typography color="textSecondary">
                Estimated completion date: {this.completionDate()}.
              </Typography>
              */}
              {/* 

              <LinearProgress
                variant="buffer"
                value={this.asmPercent()}
                valueBuffer={this.funcPercent()}
              />TODO: Make this have hover tooltips */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
