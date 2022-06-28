// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InsertRowBelowOutlinedSvg from 'gupo-icons-base/es/asn/InsertRowBelowOutlined';

export interface InsertRowBelowOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconInsertRowBelowOutlined: InsertRowBelowOutlinedIconType = (props, context) => (
    <Icon name='InsertRowBelowOutlined' {...{ ...props, ...context.attrs }} icon={InsertRowBelowOutlinedSvg} />
);

IconInsertRowBelowOutlined.displayName = 'IconInsertRowBelowOutlined';
IconInsertRowBelowOutlined.theme = 'outlined';
IconInsertRowBelowOutlined.originName = 'insert-row-below';

export default IconInsertRowBelowOutlined;
