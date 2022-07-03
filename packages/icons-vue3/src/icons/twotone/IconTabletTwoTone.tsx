// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TabletTwotoneSvg from 'icons-base/es/asn/TabletTwotone';

export interface TabletTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTabletTwotone: TabletTwotoneIconType = (props, context) => <Icon name='TabletTwotone' {...{ ...props, ...context.attrs }} icon={TabletTwotoneSvg} />;

IconTabletTwotone.displayName = 'IconTabletTwotone';
IconTabletTwotone.theme = 'twotone';
IconTabletTwotone.originName = 'tablet';

export default IconTabletTwotone;
