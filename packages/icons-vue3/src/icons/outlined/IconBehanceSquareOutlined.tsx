// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BehanceSquareOutlinedSvg from 'icon-base/es/asn/BehanceSquareOutlined';

export interface BehanceSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBehanceSquareOutlined: BehanceSquareOutlinedIconType = (props, context) => (
    <Icon name='BehanceSquareOutlined' {...{ ...props, ...context.attrs }} icon={BehanceSquareOutlinedSvg} />
);

IconBehanceSquareOutlined.displayName = 'IconBehanceSquareOutlined';

export default IconBehanceSquareOutlined;
