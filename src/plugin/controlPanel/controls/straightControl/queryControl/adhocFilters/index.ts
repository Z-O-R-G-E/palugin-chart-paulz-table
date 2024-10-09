import { ControlSetItem } from "@superset-ui/chart-controls";
import { isStraightType} from "../../../../utils";

export const adhocFilters: ControlSetItem = {
  name: 'adhoc_filters',
  override: {
    visibility: isStraightType
  },
};
