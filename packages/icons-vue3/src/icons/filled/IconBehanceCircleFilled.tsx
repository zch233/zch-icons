// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BehanceCircleFilledSvg from 'icon-base/es/asn/BehanceCircleFilled';

export interface BehanceCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBehanceCircleFilled: BehanceCircleFilledIconType = (props, context) => (
    <Icon name='BehanceCircleFilled' {...{ ...props, ...context.attrs }} icon={BehanceCircleFilledSvg} />
);

IconBehanceCircleFilled.displayName = 'IconBehanceCircleFilled';

export default IconBehanceCircleFilled;
