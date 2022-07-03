// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BehanceSquareOutlinedSvg from 'icons-base/es/asn/BehanceSquareOutlined';

export interface BehanceSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBehanceSquareOutlined: BehanceSquareOutlinedIconType = (props, context) => (
    <Icon name='BehanceSquareOutlined' {...{ ...props, ...context.attrs }} icon={BehanceSquareOutlinedSvg} />
);

IconBehanceSquareOutlined.displayName = 'IconBehanceSquareOutlined';
IconBehanceSquareOutlined.theme = 'outlined';
IconBehanceSquareOutlined.originName = 'behance-square';

export default IconBehanceSquareOutlined;
