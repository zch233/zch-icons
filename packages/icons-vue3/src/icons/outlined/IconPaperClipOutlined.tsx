// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PaperClipOutlinedSvg from 'icon-base/es/asn/PaperClipOutlined';

export interface PaperClipOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPaperClipOutlined: PaperClipOutlinedIconType = (props, context) => (
    <Icon name='PaperClipOutlined' {...{ ...props, ...context.attrs }} icon={PaperClipOutlinedSvg} />
);

IconPaperClipOutlined.displayName = 'IconPaperClipOutlined';

export default IconPaperClipOutlined;
