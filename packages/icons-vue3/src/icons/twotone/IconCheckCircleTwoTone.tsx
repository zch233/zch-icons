// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CheckCircleTwoToneSvg from 'icon-base/es/asn/CheckCircleTwoTone';

export interface CheckCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCheckCircleTwoTone: CheckCircleTwoToneIconType = (props, context) => (
    <Icon name='CheckCircleTwoTone' {...{ ...props, ...context.attrs }} icon={CheckCircleTwoToneSvg} />
);

IconCheckCircleTwoTone.displayName = 'IconCheckCircleTwoTone';

export default IconCheckCircleTwoTone;
