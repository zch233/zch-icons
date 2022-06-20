// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MediumCircleFilledSvg from 'icon-base/es/asn/MediumCircleFilled';

export interface MediumCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMediumCircleFilled: MediumCircleFilledIconType = (props, context) => (
    <Icon name='MediumCircleFilled' {...{ ...props, ...context.attrs }} icon={MediumCircleFilledSvg} />
);

IconMediumCircleFilled.displayName = 'IconMediumCircleFilled';

export default IconMediumCircleFilled;
