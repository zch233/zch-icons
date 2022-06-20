// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExperimentOutlinedSvg from 'icon-base/es/asn/ExperimentOutlined';

export interface ExperimentOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconExperimentOutlined: ExperimentOutlinedIconType = (props, context) => (
    <Icon name='ExperimentOutlined' {...{ ...props, ...context.attrs }} icon={ExperimentOutlinedSvg} />
);

IconExperimentOutlined.displayName = 'IconExperimentOutlined';

export default IconExperimentOutlined;
