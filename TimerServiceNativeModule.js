//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { TimerService } = NativeModules

export default {
  exampleMethod () {
    return TimerService.exampleMethod()
  },

  EXAMPLE_CONSTANT: TimerService.EXAMPLE_CONSTANT
}
