// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InsertRowAboveOutlinedSvg from 'icons-base/es/asn/InsertRowAboveOutlined';

export interface InsertRowAboveOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconInsertRowAboveOutlined: InsertRowAboveOutlinedIconType = (props, context) => (
    <Icon name='InsertRowAboveOutlined' {...{ ...props, ...context.attrs }} icon={InsertRowAboveOutlinedSvg} />
);

IconInsertRowAboveOutlined.displayName = 'IconInsertRowAboveOutlined';
IconInsertRowAboveOutlined.theme = 'outlined';
IconInsertRowAboveOutlined.originName = 'insert-row-above';

export default IconInsertRowAboveOutlined;
