// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExperimentOutlinedSvg from 'gupo-icons-base/es/asn/ExperimentOutlined';

export interface ExperimentOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconExperimentOutlined: ExperimentOutlinedIconType = (props, context) => (
    <Icon name='ExperimentOutlined' {...{ ...props, ...context.attrs }} icon={ExperimentOutlinedSvg} />
);

IconExperimentOutlined.displayName = 'IconExperimentOutlined';
IconExperimentOutlined.theme = 'outlined';
IconExperimentOutlined.originName = 'experiment';

export default IconExperimentOutlined;
