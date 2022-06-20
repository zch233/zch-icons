// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InfoCircleTwoToneSvg from 'icon-base/es/asn/InfoCircleTwoTone';

export interface InfoCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconInfoCircleTwoTone: InfoCircleTwoToneIconType = (props, context) => (
    <Icon name='InfoCircleTwoTone' {...{ ...props, ...context.attrs }} icon={InfoCircleTwoToneSvg} />
);

IconInfoCircleTwoTone.displayName = 'IconInfoCircleTwoTone';

export default IconInfoCircleTwoTone;
