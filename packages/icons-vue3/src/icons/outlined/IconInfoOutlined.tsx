// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InfoOutlinedSvg from 'icon-base/es/asn/InfoOutlined';

export interface InfoOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconInfoOutlined: InfoOutlinedIconType = (props, context) => <Icon name='InfoOutlined' {...{ ...props, ...context.attrs }} icon={InfoOutlinedSvg} />;

IconInfoOutlined.displayName = 'IconInfoOutlined';

export default IconInfoOutlined;
