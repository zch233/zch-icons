// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CiCircleTwoToneSvg from 'icon-base/es/asn/CiCircleTwoTone';

export interface CiCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCiCircleTwoTone: CiCircleTwoToneIconType = (props, context) => (
    <Icon name='CiCircleTwoTone' {...{ ...props, ...context.attrs }} icon={CiCircleTwoToneSvg} />
);

IconCiCircleTwoTone.displayName = 'IconCiCircleTwoTone';

export default IconCiCircleTwoTone;
