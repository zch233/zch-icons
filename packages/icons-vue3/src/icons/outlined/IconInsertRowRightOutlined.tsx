// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InsertRowRightOutlinedSvg from 'icon-base/es/asn/InsertRowRightOutlined';

export interface InsertRowRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconInsertRowRightOutlined: InsertRowRightOutlinedIconType = (props, context) => (
    <Icon name='InsertRowRightOutlined' {...{ ...props, ...context.attrs }} icon={InsertRowRightOutlinedSvg} />
);

IconInsertRowRightOutlined.displayName = 'IconInsertRowRightOutlined';

export default IconInsertRowRightOutlined;
