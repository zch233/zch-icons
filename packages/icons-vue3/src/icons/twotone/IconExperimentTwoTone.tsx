// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExperimentTwotoneSvg from 'icons-base/es/asn/ExperimentTwotone';

export interface ExperimentTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconExperimentTwotone: ExperimentTwotoneIconType = (props, context) => (
    <Icon name='ExperimentTwotone' {...{ ...props, ...context.attrs }} icon={ExperimentTwotoneSvg} />
);

IconExperimentTwotone.displayName = 'IconExperimentTwotone';
IconExperimentTwotone.theme = 'twotone';
IconExperimentTwotone.originName = 'experiment';

export default IconExperimentTwotone;
