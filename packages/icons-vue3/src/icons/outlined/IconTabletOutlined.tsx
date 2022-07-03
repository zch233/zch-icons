// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TabletOutlinedSvg from 'icons-base/es/asn/TabletOutlined';

export interface TabletOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTabletOutlined: TabletOutlinedIconType = (props, context) => (
    <Icon name='TabletOutlined' {...{ ...props, ...context.attrs }} icon={TabletOutlinedSvg} />
);

IconTabletOutlined.displayName = 'IconTabletOutlined';
IconTabletOutlined.theme = 'outlined';
IconTabletOutlined.originName = 'tablet';

export default IconTabletOutlined;
