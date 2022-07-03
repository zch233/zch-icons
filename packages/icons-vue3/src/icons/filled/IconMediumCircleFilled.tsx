// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MediumCircleFilledSvg from 'icons-base/es/asn/MediumCircleFilled';

export interface MediumCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMediumCircleFilled: MediumCircleFilledIconType = (props, context) => (
    <Icon name='MediumCircleFilled' {...{ ...props, ...context.attrs }} icon={MediumCircleFilledSvg} />
);

IconMediumCircleFilled.displayName = 'IconMediumCircleFilled';
IconMediumCircleFilled.theme = 'filled';
IconMediumCircleFilled.originName = 'medium-circle';

export default IconMediumCircleFilled;
