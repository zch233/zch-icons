// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExperimentFilledSvg from 'gupo-icons-base/es/asn/ExperimentFilled';

export interface ExperimentFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconExperimentFilled: ExperimentFilledIconType = (props, context) => (
    <Icon name='ExperimentFilled' {...{ ...props, ...context.attrs }} icon={ExperimentFilledSvg} />
);

IconExperimentFilled.displayName = 'IconExperimentFilled';
IconExperimentFilled.theme = 'filled';
IconExperimentFilled.originName = 'experiment';

export default IconExperimentFilled;
