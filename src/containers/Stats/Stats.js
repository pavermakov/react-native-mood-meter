import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
import { StoreContext } from '../../store';
import { SideBar } from '../../components/SideBar';
import { Graph } from '../../components/Graph';
import { constants } from '../../config';
import s from './Stats.styles';

class Stats extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {({ savedMoods }) => (
          <View style={s.container}>
            <View style={s.body}>
              {savedMoods.length > 0 &&
                <Fragment>
                  <SideBar items={constants.MOODS} />
                  <Graph items={savedMoods} />
                </Fragment>
              }

              {savedMoods.length === 0 &&
                <View style={s.stub}>
                  <Text style={s.text}>No results</Text>
                </View>
              }
            </View>
          </View>
        )}
      </StoreContext.Consumer>
    );
  }
}

export default Stats;
