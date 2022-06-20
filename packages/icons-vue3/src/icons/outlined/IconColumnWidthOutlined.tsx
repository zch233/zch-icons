// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ColumnWidthOutlinedSvg from 'icon-base/es/asn/ColumnWidthOutlined';

export interface ColumnWidthOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconColumnWidthOutlined: ColumnWidthOutlinedIconType = (props, context) => (
    <Icon name='ColumnWidthOutlined' {...{ ...props, ...context.attrs }} icon={ColumnWidthOutlinedSvg} />
);

IconColumnWidthOutlined.displayName = 'IconColumnWidthOutlined';

export default IconColumnWidthOutlined;
