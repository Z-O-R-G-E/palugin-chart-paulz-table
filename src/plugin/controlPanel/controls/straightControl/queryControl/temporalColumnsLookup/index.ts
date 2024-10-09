import { ControlSetItem } from "@superset-ui/chart-controls";
import { isStraightType} from "../../../../utils";

export const temporalColumnsLookup: ControlSetItem = {
  name: 'temporal_columns_lookup',
  override: {
    visibility: isStraightType
  },
};
