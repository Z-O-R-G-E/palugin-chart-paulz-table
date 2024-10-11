import {
  ControlPanelState,
  ControlSetItem,
  ControlState,
  sharedControls,
} from '@superset-ui/chart-controls';
import {
  isAggMode,
  isStraightType,
  validateAggControlValues,
} from '../../../../utils';

export const groupby: ControlSetItem = {
  name: 'groupby',
  override: {
    visibility: ({ controls }) => {
      return isAggMode({ controls }) && isStraightType({ controls });
    },
    resetOnHide: false,
    mapStateToProps: (state: ControlPanelState, controlState: ControlState) => {
      const { controls } = state;
      const originalMapStateToProps = sharedControls?.groupby?.mapStateToProps;
      const newState = originalMapStateToProps?.(state, controlState) ?? {};
      newState.externalValidationErrors = validateAggControlValues(controls, [
        controls.metrics?.value,
        controls.percentMetrics?.value,
        controlState.value,
      ]);

      return newState;
    },
    rerender: ['metrics', 'percentMetrics'],
  },
};
