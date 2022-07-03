// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ThunderboltTwotoneSvg from 'icons-base/es/asn/ThunderboltTwotone';

export interface ThunderboltTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconThunderboltTwotone: ThunderboltTwotoneIconType = (props, context) => (
    <Icon name='ThunderboltTwotone' {...{ ...props, ...context.attrs }} icon={ThunderboltTwotoneSvg} />
);

IconThunderboltTwotone.displayName = 'IconThunderboltTwotone';
IconThunderboltTwotone.theme = 'twotone';
IconThunderboltTwotone.originName = 'thunderbolt';

export default IconThunderboltTwotone;
