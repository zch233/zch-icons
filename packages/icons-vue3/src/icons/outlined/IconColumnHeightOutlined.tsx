// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ColumnHeightOutlinedSvg from 'icon-base/es/asn/ColumnHeightOutlined';

export interface ColumnHeightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconColumnHeightOutlined: ColumnHeightOutlinedIconType = (props, context) => (
    <Icon name='ColumnHeightOutlined' {...{ ...props, ...context.attrs }} icon={ColumnHeightOutlinedSvg} />
);

IconColumnHeightOutlined.displayName = 'IconColumnHeightOutlined';

export default IconColumnHeightOutlined;
