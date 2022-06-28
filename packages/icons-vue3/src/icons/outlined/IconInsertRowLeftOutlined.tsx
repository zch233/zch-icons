// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InsertRowLeftOutlinedSvg from 'gupo-icons-base/es/asn/InsertRowLeftOutlined';

export interface InsertRowLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconInsertRowLeftOutlined: InsertRowLeftOutlinedIconType = (props, context) => (
    <Icon name='InsertRowLeftOutlined' {...{ ...props, ...context.attrs }} icon={InsertRowLeftOutlinedSvg} />
);

IconInsertRowLeftOutlined.displayName = 'IconInsertRowLeftOutlined';
IconInsertRowLeftOutlined.theme = 'outlined';
IconInsertRowLeftOutlined.originName = 'insert-row-left';

export default IconInsertRowLeftOutlined;
