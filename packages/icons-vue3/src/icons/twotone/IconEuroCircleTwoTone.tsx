// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EuroCircleTwoToneSvg from 'icon-base/es/asn/EuroCircleTwoTone';

export interface EuroCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconEuroCircleTwoTone: EuroCircleTwoToneIconType = (props, context) => (
    <Icon name='EuroCircleTwoTone' {...{ ...props, ...context.attrs }} icon={EuroCircleTwoToneSvg} />
);

IconEuroCircleTwoTone.displayName = 'IconEuroCircleTwoTone';

export default IconEuroCircleTwoTone;
