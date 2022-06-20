// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MailOutlinedSvg from 'icon-base/es/asn/MailOutlined';

export interface MailOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMailOutlined: MailOutlinedIconType = (props, context) => <Icon name='MailOutlined' {...{ ...props, ...context.attrs }} icon={MailOutlinedSvg} />;

IconMailOutlined.displayName = 'IconMailOutlined';

export default IconMailOutlined;
