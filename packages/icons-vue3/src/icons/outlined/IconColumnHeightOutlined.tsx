// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ColumnHeightOutlinedSvg from 'gupo-icons-base/es/asn/ColumnHeightOutlined';

export interface ColumnHeightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconColumnHeightOutlined: ColumnHeightOutlinedIconType = (props, context) => (
    <Icon name='ColumnHeightOutlined' {...{ ...props, ...context.attrs }} icon={ColumnHeightOutlinedSvg} />
);

IconColumnHeightOutlined.displayName = 'IconColumnHeightOutlined';
IconColumnHeightOutlined.theme = 'outlined';
IconColumnHeightOutlined.originName = 'column-height';

export default IconColumnHeightOutlined;
