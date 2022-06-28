// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FireTwotoneSvg from 'gupo-icons-base/es/asn/FireTwotone';

export interface FireTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFireTwotone: FireTwotoneIconType = (props, context) => <Icon name='FireTwotone' {...{ ...props, ...context.attrs }} icon={FireTwotoneSvg} />;

IconFireTwotone.displayName = 'IconFireTwotone';
IconFireTwotone.theme = 'twotone';
IconFireTwotone.originName = 'fire';

export default IconFireTwotone;
