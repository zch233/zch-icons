// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AliwangwangOutlinedSvg from 'icon-base/es/asn/AliwangwangOutlined';

export interface AliwangwangOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAliwangwangOutlined: AliwangwangOutlinedIconType = (props, context) => (
    <Icon name='AliwangwangOutlined' {...{ ...props, ...context.attrs }} icon={AliwangwangOutlinedSvg} />
);

IconAliwangwangOutlined.displayName = 'IconAliwangwangOutlined';

export default IconAliwangwangOutlined;
