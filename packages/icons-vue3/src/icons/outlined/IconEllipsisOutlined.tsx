// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EllipsisOutlinedSvg from 'gupo-icons-base/es/asn/EllipsisOutlined';

export interface EllipsisOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEllipsisOutlined: EllipsisOutlinedIconType = (props, context) => (
    <Icon name='EllipsisOutlined' {...{ ...props, ...context.attrs }} icon={EllipsisOutlinedSvg} />
);

IconEllipsisOutlined.displayName = 'IconEllipsisOutlined';
IconEllipsisOutlined.theme = 'outlined';
IconEllipsisOutlined.originName = 'ellipsis';

export default IconEllipsisOutlined;
