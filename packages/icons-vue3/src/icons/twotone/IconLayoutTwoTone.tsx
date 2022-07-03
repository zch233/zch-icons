// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LayoutTwotoneSvg from 'icons-base/es/asn/LayoutTwotone';

export interface LayoutTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLayoutTwotone: LayoutTwotoneIconType = (props, context) => <Icon name='LayoutTwotone' {...{ ...props, ...context.attrs }} icon={LayoutTwotoneSvg} />;

IconLayoutTwotone.displayName = 'IconLayoutTwotone';
IconLayoutTwotone.theme = 'twotone';
IconLayoutTwotone.originName = 'layout';

export default IconLayoutTwotone;
