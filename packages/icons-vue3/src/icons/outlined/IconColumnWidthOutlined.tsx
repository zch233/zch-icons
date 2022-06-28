// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ColumnWidthOutlinedSvg from 'gupo-icons-base/es/asn/ColumnWidthOutlined';

export interface ColumnWidthOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconColumnWidthOutlined: ColumnWidthOutlinedIconType = (props, context) => (
    <Icon name='ColumnWidthOutlined' {...{ ...props, ...context.attrs }} icon={ColumnWidthOutlinedSvg} />
);

IconColumnWidthOutlined.displayName = 'IconColumnWidthOutlined';
IconColumnWidthOutlined.theme = 'outlined';
IconColumnWidthOutlined.originName = 'column-width';

export default IconColumnWidthOutlined;
